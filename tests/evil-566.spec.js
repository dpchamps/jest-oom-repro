
  describe("some-evil-spec=566", () => {
    it("evil-block-566", () => {
      window.evil_566 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  