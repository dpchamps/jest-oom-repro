
  describe("some-evil-spec=132", () => {
    it("evil-block-132", () => {
      window.evil_132 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  