
  describe("some-evil-spec=305", () => {
    it("evil-block-305", () => {
      window.evil_305 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  