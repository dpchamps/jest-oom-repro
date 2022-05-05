
  describe("some-evil-spec=936", () => {
    it("evil-block-936", () => {
      window.evil_936 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  