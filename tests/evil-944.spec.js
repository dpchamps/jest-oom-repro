
  describe("some-evil-spec=944", () => {
    it("evil-block-944", () => {
      window.evil_944 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  