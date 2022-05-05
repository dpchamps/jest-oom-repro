
  describe("some-evil-spec=466", () => {
    it("evil-block-466", () => {
      window.evil_466 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  