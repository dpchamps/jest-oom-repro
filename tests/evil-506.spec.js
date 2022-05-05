
  describe("some-evil-spec=506", () => {
    it("evil-block-506", () => {
      window.evil_506 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  