
  describe("some-evil-spec=4", () => {
    it("evil-block-4", () => {
      window.evil_4 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  