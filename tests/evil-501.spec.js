
  describe("some-evil-spec=501", () => {
    it("evil-block-501", () => {
      window.evil_501 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  