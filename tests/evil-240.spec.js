
  describe("some-evil-spec=240", () => {
    it("evil-block-240", () => {
      window.evil_240 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  