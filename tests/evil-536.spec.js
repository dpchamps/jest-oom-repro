
  describe("some-evil-spec=536", () => {
    it("evil-block-536", () => {
      window.evil_536 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  