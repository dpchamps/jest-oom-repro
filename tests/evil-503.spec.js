
  describe("some-evil-spec=503", () => {
    it("evil-block-503", () => {
      window.evil_503 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  