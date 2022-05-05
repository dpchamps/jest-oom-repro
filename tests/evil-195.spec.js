
  describe("some-evil-spec=195", () => {
    it("evil-block-195", () => {
      window.evil_195 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  