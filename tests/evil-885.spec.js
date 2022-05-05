
  describe("some-evil-spec=885", () => {
    it("evil-block-885", () => {
      window.evil_885 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  