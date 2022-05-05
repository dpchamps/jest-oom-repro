
  describe("some-evil-spec=927", () => {
    it("evil-block-927", () => {
      window.evil_927 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  