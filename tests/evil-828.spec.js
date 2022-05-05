
  describe("some-evil-spec=828", () => {
    it("evil-block-828", () => {
      window.evil_828 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  