
  describe("some-evil-spec=13", () => {
    it("evil-block-13", () => {
      window.evil_13 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  