
  describe("some-evil-spec=913", () => {
    it("evil-block-913", () => {
      window.evil_913 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  