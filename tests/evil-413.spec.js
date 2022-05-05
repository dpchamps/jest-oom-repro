
  describe("some-evil-spec=413", () => {
    it("evil-block-413", () => {
      window.evil_413 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  