
  describe("some-evil-spec=520", () => {
    it("evil-block-520", () => {
      window.evil_520 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  