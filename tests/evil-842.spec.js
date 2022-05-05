
  describe("some-evil-spec=842", () => {
    it("evil-block-842", () => {
      window.evil_842 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  