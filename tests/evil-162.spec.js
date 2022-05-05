
  describe("some-evil-spec=162", () => {
    it("evil-block-162", () => {
      window.evil_162 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  